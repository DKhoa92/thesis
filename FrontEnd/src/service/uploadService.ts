import api from "./apiService";

const uploadFile = async (file: File, folder: string) => {
  try {
    const form = new FormData();
    form.append("file", file);
    form.append("folder", folder);
    const { data } = await api.post<{
      url: string;
    }>("/file/upload", form, true);
    return data.url;
  } catch (error) {
    return "";
  }
};

export default uploadFile;
