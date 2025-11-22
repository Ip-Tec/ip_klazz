---
title: "Network Services and Common Vulnerabilities"
description: "An overview of common network services and their associated vulnerabilities."
---

# Network Services and Common Vulnerabilities

Network services are the applications that run on servers and provide functionality to clients. Many of these services have well-known vulnerabilities that can be exploited by attackers. This guide provides a defensive overview of common network services and their associated risks.

## Common Network Services

Here are some of the most common network services you'll encounter:

| Port | Service | Description |
| --- | --- | --- |
| 21 | FTP | **File Transfer Protocol:** Used for transferring files between a client and a server. |
| 22 | SSH | **Secure Shell:** Used for secure remote login and other secure network services. |
| 23 | Telnet | **Telnet:** An insecure protocol for remote login. |
| 25 | SMTP | **Simple Mail Transfer Protocol:** Used for sending email. |
| 53 | DNS | **Domain Name System:** Translates domain names to IP addresses. |
| 80 | HTTP | **Hypertext Transfer Protocol:** The foundation of the World Wide Web. |
| 110 | POP3 | **Post Office Protocol version 3:** Used for receiving email. |
| 143 | IMAP | **Internet Message Access Protocol:** Another protocol for receiving email. |
| 443 | HTTPS | **HTTP Secure:** The secure version of HTTP, encrypted with SSL/TLS. |
| 3389 | RDP | **Remote Desktop Protocol:** Used for remote access to Windows systems. |

## Vulnerabilities and Mitigations

### FTP (Port 21)

- **Vulnerabilities:**
  - **Plaintext Authentication:** FTP sends usernames and passwords in cleartext, making it susceptible to sniffing.
  - **Anonymous Access:** Misconfigured FTP servers may allow anonymous users to access sensitive files.
  - **Bounce Attacks:** FTP can be used to launch attacks against other systems.
- **Mitigations:**
  - Use **FTPS** (FTP over SSL/TLS) or **SFTP** (SSH File Transfer Protocol) for secure file transfers.
  - Disable anonymous access unless absolutely necessary.
  - Keep your FTP server software up to date.

### Telnet (Port 23)

- **Vulnerabilities:**
  - **Plaintext Communication:** All Telnet traffic, including credentials, is sent in cleartext.
- **Mitigations:**
  - **Disable Telnet.** Use **SSH (Port 22)** for secure remote access.

### SMTP (Port 25)

- **Vulnerabilities:**
  - **Open Relay:** Misconfigured SMTP servers can be used to send spam.
  - **Email Spoofing:** It's easy to forge the "From" address in an email.
- **Mitigations:**
  - Configure your SMTP server to relay mail only from authorized domains.
  - Implement **SPF (Sender Policy Framework)**, **DKIM (DomainKeys Identified Mail)**, and **DMARC (Domain-based Message Authentication, Reporting, and Conformance)** to prevent email spoofing.

### DNS (Port 53)

- **Vulnerabilities:**
  - **DNS Spoofing/Cache Poisoning:** An attacker can trick a DNS server into caching a fake record, redirecting users to a malicious site.
  - **Zone Transfers:** A misconfigured DNS server may allow an attacker to download a copy of your entire DNS database.
- **Mitigations:**
  - Use **DNSSEC (DNS Security Extensions)** to ensure the integrity of DNS data.
  - Restrict zone transfers to trusted servers.
  - Keep your DNS server software up to date.

### HTTP (Port 80)

- **Vulnerabilities:**
  - **Plaintext Communication:** All HTTP traffic is sent in cleartext.
  - **Many web application vulnerabilities**, such as SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF).
- **Mitigations:**
  - Use **HTTPS (Port 443)** to encrypt all web traffic.
  - Follow secure coding practices to prevent web application vulnerabilities.
  - Use a Web Application Firewall (WAF).

### RDP (Port 3389)

- **Vulnerabilities:**
  - **Brute-force attacks:** Attackers can try to guess weak passwords.
  - **Man-in-the-Middle attacks:** An attacker can intercept an RDP connection and steal credentials.
  - **Vulnerabilities in the RDP protocol itself**, such as BlueKeep (CVE-2019-0708).
- **Mitigations:**
  - Use strong passwords and two-factor authentication.
  - Use a VPN to access RDP from outside your network.
  - Keep your systems patched and up to date.
  - Enable Network Level Authentication (NLA).

## Summary

It's crucial to understand the services running on your network and the risks they pose. By following security best practices and keeping your systems up to date, you can significantly reduce your attack surface.

**Next Topic:** [Web application basics & HTTPS/TLS](web-app-basics-https-tls)
