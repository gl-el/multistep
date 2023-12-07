import { useState } from 'react';

export function useFormSubmit(callback?: () => void) {
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error'>('success');

  async function onSubmit<T>(data: T) {
    try {
      const res = await fetch('https://api.sbercloud.ru/content/v1/bootcamp/frontend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Error occurred during submitting');
      setSubmitStatus('success');
    } catch (e) {
      setSubmitStatus('error');
    } finally {
      if (callback) {
        callback();
      }
    }
  }

  return { submitStatus, onSubmit };
}
