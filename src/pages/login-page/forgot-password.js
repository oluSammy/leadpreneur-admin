import { auth } from './../../firebase/firebase.utils';
import Swal from 'sweetalert2';

export const forgotPassword = () => {
    Swal.fire({
        title: 'Password recovery email',
        input: 'email',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: false,
        confirmButtonText: 'request password recovery email',
        showLoaderOnConfirm: true,
        preConfirm: (email) => {
          return auth.sendPasswordResetEmail(email).then(function() {
                Swal.fire('Email Sent');
            }).catch(function(error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
            })
        },
        allowOutsideClick: () => !Swal.isLoading()
      })
}