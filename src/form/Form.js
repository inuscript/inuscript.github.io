import React from "react";

export const Form = () => {
  return (
    <form name="contact" method="POST" data-netlify="true">
      <div>
        お名前: <input name="text" />
      </div>
      <div>
        <textarea name="body" />
      </div>
      <button type="submit">Send</button>
    </form>
  );
};
