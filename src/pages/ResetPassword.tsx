import Title from '../components/common/Title'
import InputText from '../components/common/InputText';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { SingupStyle } from './Singup';
import { useAuth } from '@/hooks/useAuth';

export interface SignupProps {
    email: string;
    password: string;
}

function ResetPasswrod() {
    const { userResetPassword, usersRestRequest, resetRequested } = useAuth();

    const { register, handleSubmit, formState: { errors }, } = useForm<SignupProps>();

    const onSubmit = (data: SignupProps) => {
        // if(resetRequested) {
        //     //초기화
        //     userResetPassword(data)
        // } else {
        //     usersRestRequest(data)
        // } -> 이 코드도 리팩토리를 하게 되면 ...

        resetRequested ? userResetPassword(data) :usersRestRequest(data);
    }

  return (
    <>
        <Title size='large'>비밀번호 초기화 </Title>
        <SingupStyle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <InputText placeholder='이메일' inputType='emaill' {...register("email", { required: true})} />
                    {errors.email && <p className='error-text'>이메일을 입력해 주세요</p>}
                </fieldset>
                {resetRequested && (
                    <fieldset>
                    <InputText placeholder='비밀번호' inputType='password' {...register("password", { required: true})} />
                    {errors.password && <p className='error-text'>비밀번호를 입력해 주세요</p>}
                </fieldset>
                )}
                <fieldset>
                    <Button type="submit" size='medium' scheme='primary'>
                       {resetRequested ? "비밀번호 초기화" : "초기화 요청"}
                    </Button> 
                </fieldset>
                <div className="info">
                    <Link to='/reset'>비밀번호 초기화</Link>
                </div>
            </form>
        </SingupStyle>
    </>
  )
}

export default ResetPasswrod
