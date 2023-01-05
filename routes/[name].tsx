import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  return(
  <div>
  
  <div>
  Hello {props.params.name}

  </div>

  <div>
  Hello {props.data}

  </div>

  <div>
  Hello {props.params.url}

  </div>

  <div>
  Hello {props.params.route}

  </div>

   </div>
  );
}
