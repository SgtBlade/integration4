import * as FileSystem from "expo-file-system";

class FilesystemService {
  constructor() {}

  moveToDocsDir = async (path) => {
    const fileName = path.split("/").pop();
    const newPath = FileSystem.documentDirectory + fileName;
    return await FileSystem.moveAsync({ from: path, to: newPath });
  };
  readDocsDir = async () => {
    return await FileSystem.readDirectoryAsync(FileSystem.documentDirectory);
  };
  download = async (url, fileName) => {
    return await FileSystem.downloadAsync(
      url,
      FileSystem.documentDirectory + fileName
    );
  };
  loadContent = async (fileName) => {
    return await FileSystem.readAsStringAsync(
      FileSystem.documentDirectory + fileName
    );
  };
}
export default FilesystemService;
