import { createContext, useState, useContext, useEffect } from 'react';
import { profilesAPI } from "../api";
import { toast } from "react-toastify";
import AuthenticationContext from "../context/AuthenticationContext";
const ProfileContext = createContext();
const ProfileProvider = ({ children }) => {
    const [profileValues, setProfileValues] = useState({
        profile: null,
        studentProfile: {
            image: null,//Image file
            imagePreview: null,
            idUniversity: "",
            name: "",
            major: null,//Id major
            semester: "",
            description: "",
            user: null,//Id user
        },
        companyProfile: {
            image: null,
            imagePreview: null,
            name: "",
            user: null,
            location: "",
            employees: "",
            description: "",
        }
    });
    const { user } = useContext(AuthenticationContext);
    const resetProfiles = () => {
        setProfileValues({
            ...profileValues,
            profile: null,
            studentProfile: {
                image: null,//Image file
                imagePreview: null,
                idUniversity: "",
                name: "",
                major: null,//Id major
                semester: "",
                description: "",
                user: null,//Id user
            }
        });
    }
    const handleOnChangeProfileCompany = (e) => {
        const { name, value, files } = e.target;
        if (name === "image") {
            setProfileValues({
                ...profileValues,
                companyProfile: {
                    ...profileValues.companyProfile,
                    imagePreview: name === "image"
                        ? URL.createObjectURL(files[0])
                        : URL.createObjectURL(profileValues.companyProfile.image),
                    [name]: files[0]
                }
            });
        } else {
            setProfileValues({
                ...profileValues,
                companyProfile: {
                    ...profileValues.companyProfile,
                    [name]: value
                }
            });
        }
    }
    const handleOnChangeProfileStudent = (e) => {
        const { name, value, files } = e.target;
        if (name === "image") {
            setProfileValues({
                ...profileValues,
                studentProfile: {
                    ...profileValues.studentProfile,
                    imagePreview: name === "image"
                        ? URL.createObjectURL(files[0])
                        : URL.createObjectURL(profileValues.studentProfile.image),
                    [name]: files[0]
                }
            });
        } else {
            setProfileValues({
                ...profileValues,
                studentProfile: {
                    ...profileValues.studentProfile,
                    [name]: value
                }
            });
        }
    }



    const flowGetUserProfile = async () => {
        try {
            const profile = await profilesAPI.getProfileById(user);
            setProfileValues({
                ...profileValues,
                profile: profile,
                studentProfile: { ...profile, imagePreview: profile.image },
                companyProfile: { ...profile, imagePreview: profile.image }
            });
        } catch (error) {
            resetProfiles();
            openToast(
                "No tiene un perfil, create uno!!",
                "top-right",
                "toast-error"
            );
        }
    }
    const flowAddCompanyProfile = async () => {
        try {
            const { description, employees, image, location, name } = profileValues.companyProfile;
            const profileForm = new FormData();
            profileForm.append("image", image);
            profileForm.append("description", description);
            profileForm.append("employees", employees);
            profileForm.append("location", location);
            profileForm.append("name", name);
            profileForm.append("user", user);
            const profileCreated = await profilesAPI.addCompanyProfile(profileForm);
            setProfileValues({
                ...profileValues,
                profile: profileCreated,
                companyProfile: { ...profileCreated, imagePreview: profileCreated.image }
            });
            openToast(
                "Perfil creado!!",
                "top-right",
                "toast-success"
            );
        } catch (error) {
            const errors = error.response.data;
            errors.forEach(error => {
                openToast(
                    error.msg,
                    "top-right",
                    "toast-error"
                );
            });
        }
    }
    const flowAddStudentProfile = async () => {
        try {
            const { cv, description, idUniversity, image, major, name, semester } = profileValues.studentProfile;
            const profileForm = new FormData();
            profileForm.append("image", image);
            profileForm.append("cv", cv);
            profileForm.append("description", description);
            profileForm.append("idUniversity", idUniversity);
            profileForm.append("major", major);
            profileForm.append("name", name);
            profileForm.append("semester", semester);
            profileForm.append("user", user);
            const profileCreated = await profilesAPI.addStudentProfile(profileForm);
            setProfileValues({
                ...profileValues,
                profile: profileCreated,
                studentProfile: { ...profileCreated, imagePreview: profileCreated.image }
            });
            openToast(
                "Perfil creado!!",
                "top-right",
                "toast-success"
            );
        } catch (error) {
            const errors = error.response.data;
            errors.forEach(error => {
                openToast(
                    error.msg,
                    "top-right",
                    "toast-error"
                );
            });
        }
    }

    const openToast = (message, location, type) => {
        toast.success(message, {
            position: location,
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            className: type,
            progressClassName: "toast-success-bar",
            icon: false,
        });
    };

    return (
        <ProfileContext.Provider
            value={{
                ...profileValues,
                flowGetUserProfile,
                handleOnChangeProfileStudent,
                flowAddStudentProfile,
                handleOnChangeProfileCompany,
                flowAddCompanyProfile
            }}
        >
            {children}
        </ProfileContext.Provider>
    )
}

export { ProfileProvider };
export default ProfileContext;