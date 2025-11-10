
# Curriculum (weekly topics + lab exercises + deliverables)

## Weeks 1–4 — Foundations & packet analysis

Week 1 — **Networking fundamentals**

* Topics: OSI vs TCP/IP, Ethernet, MAC, IP, ARP, basic subnetting/CIDR.
* Labs: set up `lab-net`; install Kali + Ubuntu. Ping, arp, ip addr, `ip route`.
* Tools: `ip`, `arp`, `ping`, `traceroute`.
* Deliverable: Draw your lab network diagram and subnet plan.

Week 2 — **IP addressing & subnetting**

* Topics: IPv4 addressing, subnet masks, CIDR, NAT, DHCP basics.
* Labs: create multiple subnets (host-only + NAT). Assign static IPs and DHCP on Ubuntu.
* Exercises: practice 20 subnetting problems (CIDR -> range).
* Deliverable: a cheat sheet for subnetting and screenshots of `ip addr` on each VM.

Week 3 — **TCP & UDP internals**

* Topics: TCP 3-way handshake, seq/ack, ports, UDP, ICMP.
* Labs: capture a TCP handshake in Wireshark (start capture then `curl` a page). Use `tcpdump` to capture and `wireshark` to analyze.
* Exercises: identify SYN, SYN-ACK, ACK, retransmissions.
* Deliverable: short report explaining a captured TCP session with screenshots.

Week 4 — **Packet capture & analysis**

* Topics: Wireshark filters, following TCP streams, HTTP over TCP, basics of TLS visibility.
* Labs: run Wireshark on Kali while accessing Juice Shop; filter DNS / HTTP / TLS; use `tshark` to export pcap.
* Exercises: extract HTTP headers, find DNS lookup for Juice Shop.
* Deliverable: annotated pcap with 3 findings (e.g., cookie, DNS name, HTTP method).

## Weeks 5–8 — Discovery, services, and web basics

Week 5 — **Scanning & reconnaissance (defensive view)**

* Topics: Nmap scanning types, service detection, banner grabbing (why it matters for defenders).
* Labs: Nmap scan from Kali to Metasploitable and Ubuntu. Use `nmap -sS -sV -O`.
* Deliverable: nmap report of open ports/services and suggested mitigations.

Week 6 — **Network services & common vulnerabilities**

* Topics: SSH, FTP, SMB, DNS, HTTP — common misconfigs and exposures.
* Labs: Enumerate services on Metasploitable. Check for anonymous FTP, weak SSH.
* Exercises: identify default/weak credentials on Metasploitable (document ethically in your lab).
* Deliverable: checklist of hardening actions for each service found.

Week 7 — **Web application basics & HTTPS/TLS**

* Topics: HTTP methods, headers, cookies, sessions, basics of TLS and certs.
* Labs: Use Burp to intercept Juice Shop traffic; inspect cookies, auth flows; find insecure cookies or missing headers.
* Deliverable: write a short “bug summary” (in lab) of one low-risk issue you found and how to fix it.

Week 8 — **Simple exploitation & patching (learning defensively)**

* Topics: how unpatched services are exploited, CVE awareness, principle of least privilege.
* Labs: use a Metasploitable exploit in Metasploit only within your lab (learning what the exploit looks like). Then apply patch/hardening and show it prevents the exploit.
* Deliverable: before/after test demonstrating the fix works.

## Weeks 9–12 — Detection, monitoring, and advanced topics

Week 9 — **IDS/IPS & logging basics**

* Topics: what IDS/IPS do, signature vs anomaly detection, network vs host logs.
* Labs: set up Suricata or Security Onion (or at least drop Suricata on a VM) to ingest pcap; generate an alert by running an nmap scan and observe alert.
* Deliverable: screenshot of IDS alert + explanation.

Week 10 — **Network segmentation & firewalling**

* Topics: VLANs, ACLs, firewall rules (iptables/ufw), zero trust basics.
* Labs: configure `ufw` on Ubuntu to block a port; demonstrate segmentation by preventing Kali from accessing an “admin” VM.
* Deliverable: firewall rule file and verification steps.

Week 11 — **DNS & routing attacks (defensive)**

* Topics: DNS spoofing, cache poisoning notions, route hijacking basics (conceptual).
* Labs: observe DNS traffic in Wireshark; configure local `/etc/hosts` to simulate redirection and show how TLS/browsers react.
* Deliverable: short write-up on how DNS misconfig can lead to compromise and mitigation steps.

Week 12 — **Capstone: secure & test a service**

* Task: pick one service (web app or SSH) and perform:

  1. Recon (nmap, banners)
  2. Capture (Wireshark)
  3. Identify one weakness
  4. Apply hardening
  5. Validate fix (scans + captures)
* Deliverable: a 1–2 page final report (screenshots + commands + remediation) — this is your portfolio piece.

---

