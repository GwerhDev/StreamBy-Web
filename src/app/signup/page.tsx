import { SignupForm } from '@/components/Forms/SignupForm';
import { Navigator } from '@/components/Navigator/Navigator';
import { LoggedRedirection } from '@/components/Utils/LoggedRedirection';

export default function LoginPage() {
  return (
    <div className='dashboard-container justify-content-center align-items-center flex-dir-col'>
      <Navigator />
      <SignupForm />
      <LoggedRedirection />
    </div>
  )
}
