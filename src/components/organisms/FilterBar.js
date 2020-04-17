import React from "react";
import Box from "@material-ui/core/Box";

import "./FilterBar.css";

import {
  ThemeProvider,
  makeStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { green } from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import AlertBarError from "../../components/molecules/AlertBarError";

import { Formik, Field, useField } from "formik";
import * as yup from "yup";

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
  },
  margin: {
    margin: theme.spacing(1),
  },
  upper: {
    marginTop: "-15px",
  },
  buttonGroupSetting: {
    margin: theme.spacing(1),
    width: "242.2px",
  },
}));

const TextFieldFormik = ({ label, className, variant, id, ...props }) => {
  const [field, meta] = useField(props);
  const errorMessage = meta.error ?? meta.touched ? meta.error : "";

  return (
    <>
      <TextField
        label={label}
        className={className}
        variant={variant}
        id={id}
        {...field}
      />
      {errorMessage && (
        <div style={{ color: "red", marginLeft: 10 }}>{errorMessage}</div>
      )}
    </>
  );
};

const RadioGroupFormik = ({ ariaLabel, defaultChecked, items, ...props }) => {
  const [field, meta, helper] = useField(props);
  return (
    <>
      <RadioGroup
        aria-label={ariaLabel}
        defaultChecked={defaultChecked}
        onChange={(value, option) => {
          helper.setValue(option);
        }}
        value={field.value}
      >
        {items}
      </RadioGroup>
    </>
  );
};

const CheckboxField = ({ className, color, ...props }) => {
  const [field] = useField(props);
  return (
    <>
      <Checkbox className={className} color={color} {...field} />
    </>
  );
};

const validationSchema = yup.object({
  cocktailName: yup.string().required().max(10),
});

const FilterBar = ({ handleSearchData }) => {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{
        cocktailName: "",
        searchMethod: "byName",
        optionalSearchMethod: "",
      }}
      onSubmit={(data) => {
        handleSearchData(data, false);
      }}
      validationSchema={validationSchema}
    >
      {({ isSubmiting, handleSubmit, isValid }) => (
        <form onSubmit={handleSubmit}>
          <Box
            border={2}
            borderRadius="borderRadius"
            borderColor="Blue"
            className="BoxBorder"
          >
            <Typography className="Heading" variant="h6" component="h5">
              Filter your cocktail
            </Typography>
            <Divider />
            <div className={classes.root}>
              <ThemeProvider theme={theme}>
                <TextFieldFormik
                  className={classes.margin}
                  label="Search cocktails"
                  variant="outlined"
                  id="mui-theme-provider-outlined-input"
                  name="cocktailName"
                />
              </ThemeProvider>

              <FormControl className={classes.margin} component="fieldset">
                <FormLabel component="legend">Options</FormLabel>
                <RadioGroupFormik
                  aria-label="options"
                  name="searchMethod"
                  defaultChecked="byName"
                  items={[
                    <FormControlLabel
                      key="byName"
                      value="byName"
                      control={<Radio />}
                      label="By name of the cocktail"
                    />,
                    <FormControlLabel
                      key="byLetter"
                      value="byLetter"
                      control={<Radio />}
                      label="By first letter of coctail (return all cocktails with that letter)"
                    />,
                    <FormControlLabel
                      key="byIngredient"
                      value="byIngredient"
                      control={<Radio />}
                      label="By ingredient in cocktail (only one ingredient)"
                    />,
                  ]}
                />
              </FormControl>

              <FormLabel className={classes.margin} component="legend">
                Optional parameters
              </FormLabel>
              <FormControlLabel
                className={classes.upper}
                control={
                  <CheckboxField
                    className={classes.margin}
                    name="optionalSearchMethod"
                    color="primary"
                    value="nonAlcoholic"
                    type="checkbox"
                  />
                }
                label="Alkoholic (default) / NonAlcoholic"
              />

              <ButtonGroup
                className={classes.buttonGroupSetting}
                variant="contained"
                color="primary"
                aria-label="contained primary button group"
              >
                <Button name="traktor" type="submit">
                  Search
                </Button>
                <Button onClick={() => handleSearchData(null, true)}>
                  Random Search
                </Button>
              </ButtonGroup>
            </div>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default FilterBar;
