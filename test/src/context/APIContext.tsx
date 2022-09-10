import axios, { AxiosInstance } from "axios";

import React, { ReactNode, useContext } from "react";

class APIContextValue {
  axios: AxiosInstance;
  constructor(
    public readonly IP: string = `http://${process.env.REACT_APP_HOST}:5000`
  ) {
    this.axios = axios.create({
      withCredentials: true,
    });
  }
  getUsers = async () => {
    return await this.axios.get(`${this.IP}/user`);
  };

  getExercise = async () => {
    return await this.axios.get(`${this.IP}/exercise`);
  };

  createUser = async (username: string, password: string) => {
    const body = { username: username, password: password };
    await this.axios.post(`${this.IP}/user/add`, body);
  };

  createExercise = async (
    username: string,
    description: string,
    duration: number,
    date: Date
  ) => {
    const body = {
      username: username,
      description: description,
      duration: duration,
      date: date,
    };
    await this.axios.post(`${this.IP}/exercise/add`, body);
  };

  deleteExercise = async (id: string) => {
    await this.axios.delete(`${this.IP}/exercise/${id}`);
  };
  deleteUser = async (id: string) => {
    await this.axios.delete(`${this.IP}/user/${id}`);
  };
}

const defaultValue = new APIContextValue();
const APIContext = React.createContext<APIContextValue>(defaultValue);
const useAPIs = () => useContext(APIContext);
const APIProvider = (props: { children: ReactNode }) => {
  return (
    <APIContext.Provider value={defaultValue}>
      {props.children}
    </APIContext.Provider>
  );
};

export { APIProvider, useAPIs, APIContextValue };
