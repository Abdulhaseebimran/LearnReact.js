import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../Components";
import { useParams, useNavigate } from "react-router-dom";
import appwriteService from "../appwrite/conf";

function EditPost() {
  const [post, setPost] = useState([]);
  const navigate = useNavigate();
  const {slug} = useParams();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post.documents);
        } else {
          navigate("/");
        }
      });
    }
  }, [slug, navigate]);
  return post ? (
    <div className="py-8">
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null;
}

export default EditPost;
