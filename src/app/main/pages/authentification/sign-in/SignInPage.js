import { Controller, useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import _ from '@lodash';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import styled from 'styled-components';
import jwtService from '../../../../auth/services/jwtService';

/**
 * Form Validation Schema
 */

const WhiteBorderTextField = styled(TextField)`
  & label.Mui-focused {
    color: white;
  }
  & .muiltr-1xds06q-MuiInputBase-root-MuiOutlinedInput-root {
    border-radius: 50px;
    width: 440px;
    margin-right: 100px;
  }
`;

const schema = yup.object().shape({
  email: yup.string().email('You must enter a valid email').required('You must enter a email'),
  password: yup
    .string()
    .required('Please enter your password.')
    .min(4, 'Password is too short - must be at least 4 chars.'),
});

const defaultValues = {
  userName: '',
  password: '',
  remember: true,
};

function SignInPage() {
  const history = useNavigate();
  const { control, formState, handleSubmit, setError, setValue } = useForm({
    mode: 'onChange',
    defaultValues,
  });

  const { isValid, dirtyFields, errors } = formState;

  useEffect(() => {
    setValue('userName', 'hiadmin@live.ru', {
      shouldDirty: true,
      shouldValidate: true,
    });
    setValue('password', '2124Beta*', {
      shouldDirty: true,
      shouldValidate: true,
    });
  }, [setValue]);

  function onSubmit({ userName, password }) {
    jwtService
      .signInWithEmailAndPassword(userName, password)
      .then((user) => {
        history('/dashboards/home');
        // No need to do anything, user data will be set at app/auth/AuthContext
      })
      .catch((_errors) => {
        _errors.forEach((error) => {
          setError(error.type, {
            type: 'manual',
            message: error.message,
          });
        });
      });
  }

  return (
    <>
      <div className="bg-yellow fixed w-full z-99">
        <img src="/assets/icons/hiBeta.svg" alt="" className="p-10 ml-68" />
      </div>
      <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-1 min-w-0 bg-grey ">
        <div className="relative w-full max-w-2xl ml-68 mt-96 ">
          <img src="/assets/icons/singInIcon.svg" alt="" />
        </div>
        <Paper className="h-full sm:h-auto md:flex md:items-center md:justify-start w-full sm:w-auto md:h-full md:w-1/2 sm:rounded-2xl md:rounded-none sm:shadow md:shadow-none bg-grey ">
          <div className="w-full max-w-320 sm:w-320">
            <h1 className=" text-5xl w-320  tracking-tight leading-tight ml-76 ">Вход в систему</h1>
            <div className="flex items-baseline mt-2 font-medium ml-76">
              <Typography>Don't have an account?</Typography>
              <Link className="ml-4" to="/sign-up">
                Sign up
              </Link>
            </div>

            <form
              name="loginForm"
              noValidate
              className="flex flex-col justify-center w-full mt-32"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Controller
                name="userName"
                control={control}
                render={({ field }) => (
                  <WhiteBorderTextField
                    {...field}
                    className="mb-24 rounded-32 "
                    autoFocus
                    type="email"
                    error={!!errors.email}
                    helperText={errors?.email?.message}
                    variant="outlined"
                    required
                    fullWidth
                  />
                )}
              />

              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <WhiteBorderTextField
                    {...field}
                    className="mb-24"
                    type="password"
                    error={!!errors.password}
                    helperText={errors?.password?.message}
                    variant="outlined"
                    required
                    fullWidth
                  />
                )}
              />

              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between ml-76">
                <Controller
                  name="remember"
                  control={control}
                  render={({ field }) => (
                    <FormControl>
                      <FormControlLabel
                        label="Remember me"
                        control={<Checkbox size="small" {...field}/>}
                      />
                    </FormControl>
                  )}
                />

                <Link className="text-md font-medium" to="/pages/auth/forgot-password">
                  Forgot password?
                </Link>
              </div>

              <Button
                variant="contained"
                className=" w-full mt-16 ml-56 bg-yellow "
                aria-label="Sign in"
                disabled={_.isEmpty(dirtyFields) || !isValid}
                type="submit"
                size="large"
              >
                Войти
              </Button>
            </form>
          </div>
        </Paper>
      </div>
    </>
  );
}

export default SignInPage;
