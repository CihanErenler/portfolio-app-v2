import { FC, useState } from "react";
import { Button } from "..";

type DataType = {
  "form-name": string;
  email: string;
  name: string;
  message: string;
};

const ContactForm: FC<JSX.IntrinsicElements["form"]> = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const encode = (data: DataType) => {
    return Object.keys(data)
      .map(
        (key: string) =>
          encodeURIComponent(key) +
          "=" +
          encodeURIComponent(data[key as keyof DataType])
      )
      .join("&");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email && name && message) {
      fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encode({ "form-name": "contact", email, name, message }),
      })
        .then(() => {
          alert("Success!");
          setEmail("");
          setName("");
          setMessage("");
        })
        .catch((error) => alert(error));
    } else {
      throw new Error("Something went wrong");
    }
  };

  return (
    <form className="card" onSubmit={(e) => handleSubmit(e)}>
      <input
        className="form-input"
        type="text"
        id="email"
        name="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="form-input"
        type="text"
        id="name"
        name="name"
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        className="form-input resize-none min-h-[150px]"
        id="message"
        name="message"
        value={message}
        placeholder="Message"
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button type="submit" full={true}>
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
