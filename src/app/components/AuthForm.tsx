// src/components/AuthForm.tsx

interface AuthFormProps {
  handleSubmit: (
    event: React.FormEvent<HTMLFormElement>,
  ) => void | Promise<void>;
  submitType: string;
}

export default function AuthForm({ handleSubmit, submitType }: AuthFormProps) {
  return (
    <form
      className="form u-width-full-line u-max-width-500 u-margin-block-start-16"
      onSubmit={handleSubmit}
    >
      <ul className="form-list">
        <li className="form-item">
          <label className="label">Email</label>
          <div className="input-text-wrapper">
            <input
              type="email"
              name="email"
              className="input-text"
              placeholder="Email"
              required
            />
          </div>
        </li>
        <li className="form-item">
          <label className="label">Password</label>
          <div className="input-text-wrapper">
            <input
              type="password"
              name="password"
              className="input-text"
              placeholder="Password"
              required
            />
          </div>
        </li>
      </ul>
      <ul className="buttons-list u-margin-block-start-16">
        <li className="buttons-list-item">
          <button
            type="submit"
            className="button is-small u-margin-inline-start-4"
            aria-label={submitType}
          >
            {submitType}
          </button>
        </li>
      </ul>
    </form>
  );
}
