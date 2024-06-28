import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { Cancel, QrCode, Profile, Facebook, Google, Twitter, Line, KakaoTalk, Apple } from '~/assets/svgs';
import Button from '../Button';
import { useStore } from '~/hooks';
import { actions } from '~/state';

const MENU_LOGIN = [
    {
        title: 'Use QR code',
        icon: <QrCode />,
        noFeatureSignUp: true,
    },
    {
        title: 'Use phone number/ email/ username',
        icon: <Profile />,
    },
    {
        title: 'Continue with Facebook',
        icon: <Facebook />,
    },
    {
        title: 'Continue with Google',
        icon: <Google />,
    },
    {
        title: 'Continue with Twitter',
        icon: <Twitter />,
        noFeatureSignUp: true,
    },
    {
        title: 'Continue with Line',
        icon: <Line />,
    },
    {
        title: 'Continue with KakaoTalk',
        icon: <KakaoTalk />,
    },
    {
        title: 'Continue with Apple',
        icon: <Apple />,
        noFeatureSignUp: true,
    },
];

interface LoginProps {
    isShowing: boolean;
    hideModal: () => void;
}

function Login({ isShowing, hideModal }: LoginProps) {
    const [state, dispatch] = useStore();
    const [switchLogin, setSwitchLogin] = useState(true);
    const HandleChangeSignUpUI = () => {
        setSwitchLogin(false);
    };
    const HandleChangeLoginUI = () => {
        setSwitchLogin(true);
    }
    const Login = () => {
        dispatch(actions.logIn());
        hideModal();
    }
    return isShowing
        ? ReactDOM.createPortal(
              <React.Fragment>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 ">
                      <div className="relative my-6 mx-auto max-w-3xl">
                          {/*content*/}
                          <div className="rounded-2xl border-0 shadow-lg relative flex flex-col justify-center items-center min-w-[480px] min-h-[640px] pt-[40px] bg-white">
                              {/*header*/}
                              <div className=" children:w-[363px]">
                                  <div className="relative">
                                      <button
                                          className="absolute top-[-28px] right-[-36px] size-[24px] scale-[1.5] hover:text-gray-600 rounded-full bg-gray-100"
                                          onClick={() => hideModal()}
                                      >
                                          <Cancel className="size-[24px] hover:text-gray-600 rounded-full p-1.5 bg-gray-100" />
                                      </button>
                                      <h1 className="font-displaybold text-center pb-8">{switchLogin ?'Log in to TikTok':'Sign up for TikTok'}</h1>
                                  </div>
                                  {/*body*/}
                                  <div className="overflow-y-scroll h-[368px] p-2 ">
                                      {MENU_LOGIN.map((item) => {
                                          if (!item.noFeatureSignUp || switchLogin) {
                                              return (
                                                  <Button
                                                      key={item.title}
                                                      style="relative w-full cursor-pointer mb-4 text-[15px] rounded-2xl border-[1px] ml-0  h-[44px] flex items-center justify-center border-b hover:bg-slate-50"
                                                      target='_blank'
                                                      onClick={()=> Login()}
                                                  >
                                                      <div className="children:size-[20px] absolute left-5">
                                                          {item.icon}
                                                      </div>
                                                      <span className="ml-2">{item.title}</span>
                                                  </Button>
                                              );
                                          }
                                      })}
                                  </div>
                                  {/*footer*/}
                                  <div className="py-4 tracking-wide px-2">
                                      <p className="text-[12px] text-gray-400 children:text-black text-center">
                                          By continuing with account located in
                                          <a href="#"> Vietnam</a>, you agree to our
                                          <a href="#" target="_blank">
                                              {' '}
                                              Term of Service{' '}
                                          </a>
                                          and acknowledge that you have read our
                                          <a href="#" target="_blank">
                                              {' '}
                                              Privacy Policy{' '}
                                          </a>
                                      </p>
                                  </div>
                              </div>
                              <div className="flex items-center gap-1 justify-center border-t-[0.5px] pt-8 w-full">
                                  {switchLogin ? (
                                      <>
                                          <p>Don't have an account?</p>
                                          <Button
                                              noDefaultStyle
                                              style="text-red-600"
                                              onClick={() => HandleChangeSignUpUI()}
                                          >
                                              {' '}
                                              Sign up
                                          </Button>
                                      </>
                                  ) : (
                                      <>
                                          <p>Already have an account?</p>
                                          <Button
                                              noDefaultStyle
                                              style="text-red-600"
                                              onClick={() => HandleChangeLoginUI()}
                                          >
                                              {' '}
                                              Log in
                                          </Button>
                                      </>
                                  )}
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </React.Fragment>,
              document.body,
          )
        : null;
}

export default Login;
