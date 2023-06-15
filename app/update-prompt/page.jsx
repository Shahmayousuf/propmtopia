

"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@app/components/Form";

const EditPrompt = () => {
  const router = useRouter();
 

  const [submitting, setSubmitting] = useState(false);
  const [post, setpost] = useState({
    prompt: "",
    tag: "",
  });
  useEffect(()=>{
   
  },[])
//   const createPrompt = async (e) => {
//     e.preventDefault();
//     setSubmitting(true);

//     try {
//       const userId = session?.user.id;
//       const response = await fetch("/api/prompt/new", 
//       {
//         method: "POST",
//         body: JSON.stringify({
//           userId,
//           prompt: post.prompt,
//            tag: post.tag,
//         }),
//       });
//       console.log('hjh',);
//       if (response.ok) router.push("/");
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setSubmitting(false);
//     }
//   };
  return (
    <div>
      <Form
        type="Edit"
        post={post}
        setpost={setpost}
        submitting={submitting}
        handleSubmit={()=>{}}
      />
    </div>
  );
};

export default EditPrompt;
