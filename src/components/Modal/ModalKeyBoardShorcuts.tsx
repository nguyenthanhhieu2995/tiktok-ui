import React from 'react';
import ReactDOM from 'react-dom';
import { DownArrow, LikeShortcut, MuteShortcut, UpArrow } from '~/assets/svgs';



interface ModalKeyBoardShorcutsProps {
    isShowing: boolean;
    hideModal: () => void;
}

function ModalKeyBoardShorcuts({ isShowing, hideModal}: ModalKeyBoardShorcutsProps) {
    return isShowing
        ? ReactDOM.createPortal(
              <React.Fragment>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                      <div className="relative my-6 mx-auto max-w-3xl">
                          {/*content*/}
                          <div className="rounded-2xl border-0 shadow-lg relative flex flex-col min-w-[400px] min-h-[280px] pt-[40px] px-[32px] pb-[32px] bg-white outline-none focus:outline-none">
                              {/*header*/}
                              <div className="relative flex flex-col items-center justify-between">
                                  <button
                                      className="absolute top-[-24px] right-[-8px] p-1 ml-auto bg-transparent float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                      onClick={() => hideModal()}
                                  >
                                      <span className="bg-transparent text-gray-700 text-5xl block outline-none focus:outline-none">
                                          &times;
                                      </span>
                                  </button>
                                  <h3 className="text-4xl font-bold text-center">Keyboard shortcuts</h3>
                              </div>
                              {/*body*/}
                              <div className="mt-4 w-full flex flex-col border-t items-center children:w-full children:font-light children:h-[40px] children:flex children:items-center children:justify-between children:border-b">
                                  <div>Go to previous video
                                    <UpArrow />
                                  </div>
                                  <div>Go to next video
                                    <DownArrow />
                                  </div>
                                  <div>Like video
                                    <LikeShortcut />
                                  </div>
                                  <div>Mute/ unmute video
                                    <MuteShortcut />
                                  </div>
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

export default ModalKeyBoardShorcuts;
