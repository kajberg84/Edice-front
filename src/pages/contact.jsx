// Imports
import React from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// context
import { UserContext } from '../context/UserContext';

// components
import { Seo } from '../components/seo/Seo';
import { Wrapper } from '../components/layout/wrapper/Wrapper';

// helpers
import { RoutingPath } from '../helpers/RoutingPath';

// styles
import styles from '../styles/pages/Contact.module.scss';

// Schema for formvalidating
const loginSchema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
  })
  .required();

export default function Contact() {
  const router = useRouter();

  // states
  const [sendValue, setSendValue] = React.useState('Send Message');
  const [formSubmitted, setFormSubmitted] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(loginSchema),
  });

  async function onSubmitForm(values) {
    try {
      setSendValue('Sending...');

      // emulate sending data to server
      setTimeout(() => {
        reset();
        setFormSubmitted(true);
      }, 300);

      console.log(values);
    } catch (error) {
      console.log(error);
    }
  }

  // ==== Städa upp bland user delarna ovanför ====
  return (
    <>
      <Seo
        title="Contact E-dice"
        description="Submit the form to get in contact with us at E-dice"
        image="/vercel.svg"
        pageUrl={RoutingPath.home}
      />

      <>
        <Wrapper>
          <div className={styles.contact}>
            <div className={styles.contact_wrapper}>
              {!formSubmitted && (
                <>
                  <h2>Contact Us</h2>
                  <form
                    onSubmit={handleSubmit(onSubmitForm)}
                    className={styles.contact_form}
                  >
                    <input
                      {...register('name')}
                      placeholder="Type in your name"
                      type="name"
                    />
                    <p className={styles.contact_error}>
                      {errors.name?.message}
                    </p>
                    <input
                      {...register('email')}
                      placeholder="Type in your email"
                    />
                    <p className={styles.contact_error}>
                      {errors.email?.message}
                    </p>
                    <textarea
                      {...register('message')}
                      placeholder="Type in your message"
                    />
                    <p className={styles.contact_error}>
                      {errors.message?.message}
                    </p>
                    <button
                      type="submit"
                      className={`${styles.contact_button} formButton`}
                    >
                      {sendValue}
                    </button>
                  </form>
                </>
              )}
              {formSubmitted && (
                <div className={styles.contact_form_submitted_reply}>
                  <h1>Thank you for your message!</h1>
                  <p>We will reply to you within three days.</p>
                </div>
              )}
            </div>
          </div>
        </Wrapper>
      </>
    </>
  );
}
