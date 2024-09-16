import ForgotPasswordForm from "./components/ForgotPasswordForm";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";

export default function Login() {
  return (
    <main>
      <h1>Login</h1>
      <LoginForm />
      <SignUpForm />
      <ForgotPasswordForm />
    </main>
  );
}
