import { useFormContext } from 'react-hook-form';
import { TextArea } from '@/components/Form';
import s from './FormSteps.module.scss';

export function ThirdForm({ id }: { id: string }) {
  const methods = useFormContext();

  const onSubmit = async () => {
    try {
      const response = await fetch('https://api.sbercloud.ru/content/v1/bootcamp/frontend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(methods.getValues()),
      });
      const result = await response.json();
      alert(result.message);
    } catch (e) {
      // handle your error
    }
  };

  return (
    <form className={s.form} id={id} onSubmit={methods.handleSubmit(onSubmit)}>
      <div className={s.about}>
        About
        <TextArea rows={3} name='about' id='field-about' max={200} margin={'dense'} fullWidth />
      </div>
    </form>
  );
}
