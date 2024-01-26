import { Injectable } from '@angular/core';
declare let Toastify: any;

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }

  notify(message: string, type: string): void {
    Toastify({
      text: message,
      duration: 3000,
      // destination: "https://github.com/apvarun/toastify-js",
      // newWindow: true,
      close: false,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      className: "text-white font-bold",
      style: {
        background: type === "success"
          ? "oklch(var(--su))"
          : type === "error"
            ? "oklch(var(--er))"
            : type === "warning"
              ? "oklch(var(--wa))"
              : "oklch(var(--in))",
      },
      // onClick: function() { } // Callback after click
    }).showToast();
  }

}
