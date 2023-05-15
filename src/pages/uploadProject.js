import React, { useState, useEffect } from "react";
import {
  Container,
  Wrapper,
  Heading,
  Label,
  Input,
  InputField,
  CreateBtn,
  TagWrapper,
  Tag,
} from "../styles/uploadProjectsStyles";
// import { db, storage } from "../firebase";
import { storage, db } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import Header from "../components/Header/Header";
import UploadProjectNavbar from "../components/UploadProjectNavbar/UploadProjectNavbar";

const uploadProject = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);
  const [source, setSource] = useState("");
  const [deployedLink, setDeployedLink] = useState("");

  const db = getFirestore();

  const data = {
    title: title,
    description: description,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (image === null) {
      console.log("Please upload an image");
      return;
    }

    const imageRef = ref(storage, `images/${image.name + v4()} `);
    uploadBytes(imageRef, image).then((snapshot) => {
      console.log("Uploaded a blob or file!");
      getDownloadURL(snapshot.ref).then((url) => {
        console.log("url", url);
        handleUpload(url);
      });
    });
  };

  const handleUpload = async (imgUrl) => {
    await addDoc(collection(db, "projects"), {
      title: title,
      description: description,
      image: imgUrl,
      tags: tags,
      source: source,
      deployedLink: deployedLink,
    });
    console.log("uploaded");
    setTitle("");
    setDescription("");
    setImage(null);
    setTags([]);
    setSource("");
    setDeployedLink("");
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Heading>Add a new project</Heading>
          <Input>
            <Label>Title: </Label>
            <InputField
              type="text"
              placeholder="Title... "
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </Input>
          <Input>
            <Label>Description: </Label>
            <InputField
              placeholder="Description... "
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </Input>

          <Input>
            <Label>Image: </Label>
            <InputField
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </Input>

          <Input>
            <Label>Tags: </Label>
            <TagWrapper>
              {tags?.map((tag) => {
                return <Tag>{tag}</Tag>;
              })}
            </TagWrapper>
            <InputField
              type="text"
              placeholder="Tags... "
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            />
            <button
              onClick={() => {
                setTags([...tags, tag]);
                setTag("");
              }}
            >
              Add Tag
            </button>
          </Input>

          <Input>
            <Label>Source: </Label>
            <InputField
              type="text"
              placeholder="Source... "
              onChange={(e) => setSource(e.target.value)}
            />
          </Input>

          <Input>
            <Label>Deployed Link: </Label>
            <InputField
              type="text"
              placeholder="Deployed... "
              onChange={(e) => setDeployedLink(e.target.value)}
            />
          </Input>

          <CreateBtn onClick={handleSubmit}>Submit Post</CreateBtn>
        </Wrapper>
      </Container>
    </>
  );
};

export default uploadProject;
