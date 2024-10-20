import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const { t } = useTranslation('pages', { keyPrefix: 'contact.form' });

  return (
    <div className="col-lg-8 col-md-8 col-sm-7 col-xs-12">
      <div className="contact-form">
        <div className="row">
          <form>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <input name="name" type="text" placeholder={t('name')} />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <input name="email" type="email" placeholder={t('email')} />
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <input name="subject" type="text" placeholder={t('subject')} />
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={10}
                placeholder={t('message')}
                defaultValue={''}
              />
              <input type="submit" defaultValue="Submit Form" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
