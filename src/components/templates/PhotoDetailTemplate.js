import React from "react";
import Layout from "../organisms/Layout";
import styled from "@emotion/styled";

const Template = ({ isLoading, hit, error }) => {
  const renderCard = () => {
    const { webformatURL, webformatWidth, webformatHeight, tags,  likes, user, downloads, comments} = hit;
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error}</div>;
    }
    //console.log("tags");
    console.log(hit);

    const AuthorInfo = styled.h1`
      font-size: 24px;
    `;
    const TagsInfo = styled.h2`
      font-size: 14px;
    `;

    return (
      <>
      <Layout>
        <div>
            <AuthorInfo>
              Autor: {user}
            </AuthorInfo>
            <TagsInfo>
            {tags}
            </TagsInfo>
            <img src={webformatURL} alt={tags} width={webformatWidth} height={webformatHeight}/>
        </div>
        <div>
          <div><b>likes </b>{likes}</div>
          <div><b>downloads </b>{downloads}</div>
          <div><b>comments </b>{comments}</div>
        </div>
      
      </Layout>
        

      
      </>
    );
  };

  return <div>{renderCard()}</div>;
};

export default Template;
