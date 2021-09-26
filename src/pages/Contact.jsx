import { useState } from "react";
import { send } from "emailjs-com";
import Header from "../components/Header";
import "../styles/Contact.scss";
import Footer from "../components/Footer";

function Contact() {
  const [toSend, setToSend] = useState({
    name: "",
    phone: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      "service_sajbp4g",
      "template_ck5aaci",
      toSend,
      "user_ry2gHd7wBFI1HcngNYfX2"
    )
      .then(() => setToSend({ name: "", phone: "", message: "", reply_to: "" }))
      .then(() => alert("Obrigado pelo contato!"))
      .catch((err) => {
        alert(`Ocorreu um erro: ${err}`);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <section>
      <Header />
      <section className="contato">
        <h2>contato</h2>
        <form onSubmit={onSubmit} className="form">
          <input
            type="text"
            name="name"
            placeholder="Nome"
            value={toSend.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Telefone"
            value={toSend.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            name="reply_to"
            placeholder="Email"
            value={toSend.reply_to}
            onChange={handleChange}
          />
          <textarea
            type="text"
            name="message"
            placeholder="Mensagem"
            value={toSend.message}
            onChange={handleChange}
          />
          <button type="submit">Enviar</button>
        </form>
        <Footer />
      </section>
    </section>
  );
}

export default Contact;
