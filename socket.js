/**
 * Socket Provider
 */
import React, {useEffect, useRef, useState} from 'react';
import socketIOClient from 'socket.io-client';
// import {ANDROID, IOS} from '../constants/constants';
// import {isIOS} from '../helper';

const SOCKET_DEV = 'http://135.125.183.192:5000/';

export const SocketContext = React.createContext({socket: null});

/**
 * connectionConfig
 */
const connectionConfig = {
  jsonp: false,
  reconnection: true,
  reconnectionDelay: 100,
  reconnectionAttempts: 100000,
  transports: ['websocket'],

// //optional
//   query: {
//     source: 'auction:mobile',
//     platform: isIOS() ? IOS : ANDROID,
//   },

};

/**
 * SocketProvider
 * @param {*} param0
 * @returns
 */
export const SocketProvider = ({children}) => {
  const env = SOCKET_DEV;
  const socket = useRef(socketIOClient(env, connectionConfig));
  const [ sid, setSid ] = useState('');


  useEffect(() => {
    socket.current.on('connect', () => {});

    socket.current.on('connected', function(data) {
      setSid(data.sid);
    });

    socket.current.on('disconnect', msg => {
      console.log('SocketIO: Disconnect', msg);
      socket.current = socketIOClient(env, connectionConfig);
    });

    return () => {
      if (socket && socket.current) {
        socket?.current?.removeAllListeners();
        socket?.current?.close();
      }
    };
  }, [env]);

  return (
    <SocketContext.Provider value={{socket: socket.current, sid: sid}} >
      {children}
    </SocketContext.Provider>
  );
};