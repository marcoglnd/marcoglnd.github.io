import { useState } from 'react';
import { send } from 'emailjs-com';
import NavBar from '../components/NavBar';
import '../styles/Contact.scss';
import { AiFillLinkedin } from 'react-icons/ai'
import { FaGithubSquare } from 'react-icons/fa';

function Contact() {
  const [toSend, setToSend] = useState({
    name: '',
    phone: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_sajbp4g',
      'template_ck5aaci',
      toSend,
      'user_ry2gHd7wBFI1HcngNYfX2'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      }); 
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <main>
      <NavBar />
      <section className="contato">
      <h2>contato</h2>
      <div>
        <a className="contact-links" href="https://www.linkedin.com/in/marcoglnd/">
          <AiFillLinkedin />
        </a>
        <a className="contact-links" href="https://github.com/marcoglnd">
          <FaGithubSquare />
        </a>
      </div>
      <form onSubmit={onSubmit} className="form">
        <input
          type='text'
          name='name'
          placeholder='Nome'
          value={toSend.name}
          onChange={handleChange}
        />
        <input
          type='text'
          name='phone'
          placeholder='Telefone'
          value={toSend.phone}
          onChange={handleChange}
        />
        <input
          type='text'
          name='reply_to'
          placeholder='Email'
          value={toSend.reply_to}
          onChange={handleChange}
        />
        <textarea
          type='text'
          name='message'
          placeholder='Mensagem'
          value={toSend.message}
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
      </section>
    </main>
  );
}

export default Contact;
