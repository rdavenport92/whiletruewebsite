import { toast } from 'vue3-toastify';

const defaultOptions = { position: 'bottom-right', autoClose: 5000 };

export default {
  info: (message, options) => {
    return toast.info(message, {
      ...defaultOptions,
      ...options,
    });
  },
  error: (message, options) => {
    return toast.error(message, {
      ...defaultOptions,
      ...options,
    });
  },
};
