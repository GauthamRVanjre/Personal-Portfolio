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
import { storage, db } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { addDoc, collection } from "firebase/firestore";
import UploadProjectNavbar from "../components/adminPageComponents/UploadProjectNavbar";

const uploadProject = () => {
  // Project state variables
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);
  const [source, setSource] = useState("");
  const [deployedLink, setDeployedLink] = useState("");

  // TimelineData state variables
  const [TimeLineYear, setTimeLineYear] = useState(0);
  const [TimeLineText, setTimeLineText] = useState("");

  // AccomplishmentsData state variables
  const [AccomplishmentsNumber, setAccomplishmentsNumber] = useState(0);
  const [AccomplishmentsText, setAccomplishmentsText] = useState("");

  /* The `const data` object is creating a new object with properties that correspond to the values of
  the `title`, `description`, `tags`, `source`, and `deployedLink` state variables. This object is
  used to store the data that will be added to a new document in the Firestore collection called
  "projects". */
  const data = {
    title: title,
    description: description,
    tags: tags,
    source: source,
    deployedLink: deployedLink,
  };

  /**
   * This function handles the submission of an image by uploading it to Firebase storage and
   * retrieving its download URL.
   * @param e - The parameter `e` is an event object that is passed to the `handleSubmit` function when
   * it is called. It represents the event that triggered the function, in this case, a form submission
   * event. The `e.preventDefault()` method is called to prevent the default behavior of the form
   * submission, which
   * @returns The function `handleSubmit` is not returning anything explicitly, but it may return
   * `undefined` implicitly if none of the conditions in the function are met.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (image === null) {
      alert("Please upload an image");
      return;
    }

    const imageRef = ref(storage, `images/${image.name + v4()} `);
    uploadBytes(imageRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        handleUpload(url);
      });
    });
  };

  /**
   * The function handles the upload of a project with an image URL and resets the input fields.
   * @param imgUrl - The `imgUrl` parameter is a string representing the URL of an image that will be
   * added to a document in a Firestore collection called "projects". The `handleUpload` function is an
   * asynchronous function that takes this `imgUrl` parameter and uses it to add a new document to the
   * "projects
   */
  const handleUpload = async (imgUrl) => {
    await addDoc(collection(db, "projects"), {
      ...data,
      imageUrl: imgUrl,
    });
    setTitle("");
    setDescription("");
    setImage(null);
    setTags([]);
    setSource("");
    setDeployedLink("");
  };

  /**
   * This function adds a new document to a Firestore collection called "TimeLine" with a year and text
   * field, and resets the input fields.
   * @param e - The "e" parameter is an event object that is passed to the function when the form is
   * submitted. It contains information about the event, such as the target element and any data
   * associated with it. In this case, it is used to prevent the default form submission behavior.
   */
  const handleTimeLineSubmit = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "TimeLine"), {
      year: TimeLineYear,
      text: TimeLineText,
    });
    setTimeLineYear(0);
    setTimeLineText("");
  };

  /**
   * This function adds a new document to a collection in a Firestore database with a number and text
   * field.
   * @param e - The "e" parameter is an event object that is passed to the function when it is
   * triggered by an event, such as a form submission. It contains information about the event, such as
   * the target element and any data associated with it. In this case, it is used to prevent the
   * default behavior
   */
  const handleAccomplishmentSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "AccomplishmentsData"), {
      number: AccomplishmentsNumber,
      text: AccomplishmentsText,
    });
    setAccomplishmentsNumber(0);
    setAccomplishmentsText("");
  };

  return (
    <>
      {/* navbar in admin section */}
      <UploadProjectNavbar />

      {/* upload project container */}
      <Container id="uploadProject">
        <Wrapper>
          <Heading>Add a new project</Heading>
          <Input>
            <Label>Title: </Label>
            <InputField
              type="text"
              placeholder="Title... "
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </Input>
          <Input>
            <Label>Description: </Label>
            <InputField
              placeholder="Description... "
              value={description}
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
              value={source}
              onChange={(e) => setSource(e.target.value)}
            />
          </Input>

          <Input>
            <Label>Deployed Link: </Label>
            <InputField
              type="text"
              placeholder="Deployed... "
              value={deployedLink}
              onChange={(e) => setDeployedLink(e.target.value)}
            />
          </Input>

          <CreateBtn onClick={handleSubmit}>Submit Post</CreateBtn>
        </Wrapper>
      </Container>

      {/* upload Time Line Event container */}
      <Container
        style={{
          marginTop: "200px",
        }}
        id="uploadAbout"
      >
        <Wrapper>
          <Heading>Add a new Time Line Event</Heading>
          <Input>
            <Label>Year: </Label>
            <InputField
              type="text"
              placeholder="Year... "
              value={TimeLineYear}
              onChange={(e) => setTimeLineYear(e.target.value)}
            />
          </Input>
          <Input>
            <Label>Text: </Label>
            <InputField
              type="text"
              placeholder="Text... "
              value={TimeLineText}
              onChange={(e) => setTimeLineText(e.target.value)}
            />
          </Input>
          <CreateBtn onClick={handleTimeLineSubmit}>Add about</CreateBtn>
        </Wrapper>
      </Container>

      {/* upload a Accomplishment container */}
      <Container id="uploadAccomplishments">
        <Wrapper>
          <Heading>Add a new accomplishment</Heading>
          <Input>
            <Label>Number: </Label>
            <InputField
              type="text"
              placeholder="Number... "
              value={AccomplishmentsNumber}
              onChange={(e) => setAccomplishmentsNumber(e.target.value)}
            />
          </Input>

          <Input>
            <Label>Text: </Label>
            <InputField
              type="text"
              placeholder="Text... "
              value={AccomplishmentsText}
              onChange={(e) => setAccomplishmentsText(e.target.value)}
            />
          </Input>
          <CreateBtn onClick={handleAccomplishmentSubmit}>
            Add accomplishment
          </CreateBtn>
        </Wrapper>
      </Container>
    </>
  );
};

export default uploadProject;
