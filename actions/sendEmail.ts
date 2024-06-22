"use server";

export const sendEmail = async (formData: FormData) => {
  console.log("Running on server....");
  console.log("formData: ", formData.get('email'));
  console.log("form data: ", formData);
}
