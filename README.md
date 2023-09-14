Repo demonstrating form action causing full page reload

Steps to reproduce:

  1. yarn install
  2. yarn rw build -v && yarn rw serve
  3. Open web browser console, make sure to have "Preserve logs" enabled
  4. Click "Send" on the form on the page
  5. Notice that 'form action' is **not** printed to the console. Also notice
     that the entire page is reloaded.
