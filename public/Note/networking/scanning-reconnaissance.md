---
title: "Scanning and Reconnaissance (Defensive View)"
description: "Understand how attackers scan networks and how to defend against it."
---

# Scanning and Reconnaissance (Defensive View)

Scanning and reconnaissance is the first phase of most network attacks. Attackers use these techniques to gather information about your network, identify potential targets, and find vulnerabilities. By understanding how these techniques work, you can better defend your network.

## What is Reconnaissance?

Reconnaissance is the process of gathering information about a target system or network. This can be done in two ways:

- **Passive Reconnaissance:** Gathering information without directly interacting with the target. This can include searching public records, social media, and other open-source intelligence (OSINT).
- **Active Reconnaissance:** Directly interacting with the target to gather information. This can include port scanning, network mapping, and vulnerability scanning.

## Common Scanning Techniques

Attackers use a variety of scanning techniques to probe your network:

### Ping Sweeps

A ping sweep is a simple technique used to determine which hosts on a network are active. It involves sending ICMP Echo Request (`ping`) packets to a range of IP addresses and seeing which ones respond.

### Port Scanning

Port scanning is used to determine which ports on a host are open. This can reveal which services are running on the host. Common port scanning techniques include:

- **TCP SYN Scan (Half-Open Scan):** Sends a `SYN` packet to a port. If a `SYN-ACK` is received, the port is open. If a `RST` is received, the port is closed. This is a stealthy scan because a full connection is never established.
- **TCP Connect Scan:** Attempts to establish a full TCP connection with a port. If the connection succeeds, the port is open. This is less stealthy than a SYN scan because it is more likely to be logged.
- **UDP Scan:** Sends a UDP packet to a port. If an "ICMP Port Unreachable" message is received, the port is closed. If no message is received, the port may be open or firewalled.
- **XMAS Scan:** Sends a TCP packet with the `FIN`, `PSH`, and `URG` flags set. If the port is open, there is no response. If the port is closed, a `RST` is returned. This scan is less common and may not work on all systems.

## Tools for Scanning

- **Nmap:** The "Network Mapper" is a powerful and versatile tool for network discovery and security auditing. It can perform a wide variety of scans, including ping sweeps, port scans, and OS detection.
- **Masscan:** A very fast port scanner that can scan the entire internet in a matter of minutes.

## Defending Against Scanning

While it's difficult to completely prevent scanning, there are several things you can do to make it more difficult for attackers and to detect when it's happening:

### Firewalls

A firewall is your first line of defense. You can configure your firewall to block unwanted traffic, including scans. For example, you can block ICMP Echo Requests to prevent ping sweeps.

### Intrusion Detection/Prevention Systems (IDS/IPS)

An IDS/IPS can detect scanning activity and alert you to it. An IPS can also be configured to automatically block traffic from a source that is performing a scan.

### Logging and Monitoring

Log network traffic and monitor your logs for signs of scanning activity. Look for a large number of connection attempts from a single source to multiple ports or hosts.

### Honeypots

A honeypot is a decoy system that is designed to attract attackers. By monitoring the traffic to your honeypot, you can learn about the techniques that attackers are using and gather intelligence about their activities.

## Summary

Scanning and reconnaissance are the first steps in most network attacks. By understanding how these techniques work, you can take steps to defend your network and detect when it is being targeted.

**Next Topic:** [Network services & common vulnerabilities](network-services-vulnerabilities)
