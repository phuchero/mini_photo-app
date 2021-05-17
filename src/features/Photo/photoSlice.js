const { createSlice } = require("@reduxjs/toolkit");

const initialState = [
  {
    id: 1111,
    categories: 1,
    photos: "https://picsum.photos/id/986/300/300",
    title: "Hồ thị vân anh",
  },
  {
    id: 2222,
    categories: 2,
    photos: "https://picsum.photos/id/985/300/300",
    title: "Nguyễn Võ Thiên Hà",
  },
  {
    id: 3333,
    categories: 3,
    photos: "https://picsum.photos/id/984/300/300",
    title: "Nguyễn Thúy Hằng",
  },
  {
    id: 4444,
    categories: 5,
    photos: "https://picsum.photos/id/983/300/300",
    title: "Nguyễn Phạm Huyền Trang",
  },
  {
    id: 5555,
    categories: 4,
    photos: "https://picsum.photos/id/982/300/300",
    title: "Nguyễn Thị Ngọc Châu",
  },
  {
    id: 6666,
    categories: 2,
    photos: "https://picsum.photos/id/981/300/300",
    title: "Huỳnh Thị Mỹ Hảo",
  },
  {
    id: 7777,
    categories: 3,
    photos: "https://picsum.photos/id/980/300/300",
    title: "Nguyễn Hoàng Hạ Xuyên",
  },
  {
    id: 8888,
    categories: 1,
    photos: "https://picsum.photos/id/979/300/300",
    title: "Phan Thị Tứ Thy",
  },
];

const photo = createSlice({
  name: "photo",
  initialState: initialState,
  reducers: {
    addPhoto: (state, action) => {
      state.push(action.payload);
    },
    removePhoto: (state, action) => {
      //nhận được id muốn remove
      const removePhotoId = action.payload;
      //multate data trực tiếp
      return state = state.filter((photo) => photo.id !== removePhotoId);
      // nếu là mảng mới thì phải return về , còn nếu trực tiếp trên mảng thì k
    },
    updatePhoto: (state,action) =>{
      const newPhoto = action.payload;
      const photoIndex = state.findIndex(photo => photo.id === newPhoto.id);
      console.log("Index",photoIndex);
      if(photoIndex >= 0){
        state[photoIndex] = newPhoto;
      }
    }
  },
});

const { reducer, actions } = photo;
export const { addPhoto, removePhoto, updatePhoto } = actions;

export default reducer;
