import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import Message from "../islands/Message.tsx";
import Video from "../islands/Video.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div>
        <img
          src="/logo.svg"
          width="128"
          height="128"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p>
          Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
          file, and refresh.
        </p>
        <Counter start={3} />

        <Message></Message>
      

      </div>

     
    </>
    
  );
}
