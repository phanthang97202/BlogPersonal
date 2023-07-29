"use client";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export interface IFormData {
  titlePost: string;
  shortDescPost: string;
  mainContentPost: string;
}

type TForm = "create" | "update";

interface IFormProps {
  typeForm: TForm;
  data?: IFormData;
  onSubmitForm: (form: IFormData) => void;
}
function Form({ typeForm, data, onSubmitForm }: IFormProps) {
  var toolbarOptions = [
    ["bold", "italic", "underline", "strike", "link", "image"], // toggled buttons
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];
  const [formData, setFormData] = useState({
    titlePost: "",
    shortDescPost: "",
    mainContentPost: "",
  });

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitForm(formData);
    console.log("formData", formData);
  };
  return (
    <>
      <div className=" w-2/3">
        <form>
          <div className=" bg-white rounded-lg shadow-lg p-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Title Post
            </label>
            <input
              value={formData.titlePost}
              onChange={(e) => {
                console.log("event", e);
                setFormData((prev: IFormData) => {
                  return {
                    ...prev,
                    titlePost: e.target.value,
                  };
                });
              }}
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              type="text"
              placeholder="Enter title post"
            />
          </div>
          <div className=" bg-white rounded-lg shadow-lg p-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Short Description Post
            </label>
            <input
              value={formData.shortDescPost}
              onChange={(e) => {
                console.log("event", e);
                setFormData((prev: IFormData) => {
                  return {
                    ...prev,
                    shortDescPost: e.target.value,
                  };
                });
              }}
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              type="text"
              placeholder="Enter short description post"
            />
          </div>

          <div className=" bg-white rounded-lg shadow-lg p-4">
            <ReactQuill
              modules={{
                toolbar: toolbarOptions,
              }}
              style={{ height: "60vh" }}
              theme="snow"
              value={formData.mainContentPost}
              onChange={(e) => {
                console.log("event", e);
                setFormData((prev: IFormData) => {
                  return {
                    ...prev,
                    mainContentPost: e,
                  };
                });
              }}
            />
          </div>

          <button
            // type="submit"
            onClick={handleSubmitForm}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg shadow-lg hover:from-purple-500 hover:to-indigo-500 focus:outline-none focus:ring focus:border-purple-300 transform hover:scale-105 transition-all ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
export default Form;
