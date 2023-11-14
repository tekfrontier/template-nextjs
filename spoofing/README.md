# Local Dev with HTTPS and Domain Spoofing

Sometimes APIs require using https and the actual domain name you plan to deploy your website to. You can serve your local app locally over https and using your production domain with the following steps:

## Windows

- open an admin powershell console in your projects root directory
- set up a local redirect:
  - run `netsh interface portproxy add v4tov4 listenport=443 listenaddress=127.55.55.55 connectport=443 connectaddress=127.0.0.1`
  - add an entry like `127.55.55.55 mydomain.com` to your hosts file (`C:\Windows\System32\drivers\etc\hosts`)
- create a self-signed local certificate for your domain:
  - run `choco install mkcert` (consider installing [chocolatey](https://chocolatey.org/install) if you don't have it already)
  - run `mkcert -install` and accept security dialogs
  - run `mkcert mydomain.com *.mydomain.com`
  - NOTE: do NOT use these keys in production. Also, best to add them to your `.gitignore` file as well
- set up ssl proxy
  - run `pnpm add -g local-ssl-proxy`
  - before running your dev server, run `local-ssl-proxy --key mydomain.com.pem --cert mydomain.com.pem --source 443 --target 3000`
