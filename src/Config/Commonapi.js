import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV4YW1wbGVAZ21haWwuY29tIiwiX2lkIjoiNjIzYWExOWM1OGQ4ZjNkNjY0NTNhODMwIiwiaWF0IjoxNjQ4MDEwNDY1LCJleHAiOjE2NDgwOTY4NjV9.5sx18PmtGWbnBNdOLAu2yGm8HPkv_7znvUw9-fEeRPQ"
const apiUrl = 'http://localhost:8001/api/'

const authAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${token}`,
  }
});

authAxios.post('/signIn')
authAxios.get('/getAllUsers')
authAxios.post('/register')
authAxios.put('/edit-user')
authAxios.put('/changeStatus?status=isDeleted')
authAxios.post('/sendMail')
authAxios.put('/resetPassword')
authAxios.get('/getAllCategory')
authAxios.put('/updateCategory')
authAxios.delete('/deleteCategory')
authAxios.post('/addCtegory')

authAxios.post('/addRecipes')
authAxios.put('/recipesChangeStatus?status=isDeleted')
authAxios.put('/editRecipe')
authAxios.get('/getAllRecipes')
authAxios.get('/recipeDetails')
authAxios.post('/addRecipesMeta')

authAxios.get('/getAllBlog')
authAxios.post('/addBlog')
authAxios.get('/getBlog')
authAxios.put('/statusChanged')
authAxios.put('/updateBlog')
authAxios.post('/addContactDetails')
authAxios.post('/subscribe')
authAxios.get('/searchBlog')
authAxios.get('/searcRecipe')

export const api = `${apiUrl}/signIn`; 
export const AllUser = `${apiUrl}/getAllUsers`; 
export const Register = `${apiUrl}/register`;  
export const EditUser = `${apiUrl}/edit-user`; 
export const DelUser = `${apiUrl}/changeStatus?status=isDeleted`; 
export const SendMail = `${apiUrl}/sendMail`; 
export const Resetpassword = `${apiUrl}/resetPassword`; 
export const AllCategory  = `${apiUrl}/getAllCategory`; 
export const UpdateCategory  = `${apiUrl}/updateCategory`; 
export const DeleteCategory  = `${apiUrl}/deleteCategory`; 
export const addCategory  = `${apiUrl}/addCtegory`; 

export const AddRecipe  = `${apiUrl}/addRecipes`;  //
export const DeleteRecipe  = `${apiUrl}/recipesChangeStatus?status=isDeleted`;  //
export const EditRecipe  = `${apiUrl}/editRecipe`; 
export const GetAllRecipe  = `${apiUrl}/v1/getallrecipes`;  //
export const GetRecipe  = `${apiUrl}/recipeDetails`;  //
export const AddRecipesMeta  = `${apiUrl}/addRecipesMeta`; 

export const GetAllBlog  = `${apiUrl}/getAllBlog`;  //
export const addBlog  = `${apiUrl}/addBlog`; //
export const GetBlog  = `${apiUrl}/getBlog`; //
export const DeleteBlog  = `${apiUrl}/statusChanged`; //
export const UpdateBlog  = `${apiUrl}/updateBlog`;  //
export const AddContact  = `${apiUrl}/addContactDetails`;  //
export const Subscribe  = `${apiUrl}/subscribe`;  //
export const SearchBlog  = `${apiUrl}/searchBlog`;  //
export const SearchRecepi  = `${apiUrl}/searcRecipe`;  //