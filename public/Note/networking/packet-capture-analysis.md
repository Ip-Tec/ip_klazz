---
title: "Packet Capture and Analysis"
description: "Learn how to capture and analyze network traffic."
---

# Packet Capture and Analysis

Packet capture is the process of intercepting and logging traffic that passes over a digital network. This is a powerful technique for troubleshooting network problems, analyzing security incidents, and debugging applications.

## What is a Packet?

A packet is a small segment of a larger message. Data sent over a network is broken down into packets, which are then reassembled at the destination. Each packet contains a header with information about the packet's source, destination, and other details.

## Tools for Packet Capture

There are many tools available for packet capture. Some of the most popular are:

- **Wireshark:** A powerful and widely used graphical packet analyzer. It can capture live traffic and save it for later analysis.
- **tcpdump:** A command-line packet analyzer that is available on most Unix-like operating systems. It's great for capturing traffic on remote servers.
- **TShark:** The command-line version of Wireshark. It has the same powerful filtering capabilities as Wireshark but can be used in scripts.

## How to Capture Packets

To capture packets, you need to place a network interface in "promiscuous mode." This allows the interface to capture all traffic on the network, not just traffic addressed to it. Most packet capture tools will do this for you automatically.

### Capturing with tcpdump

Here's an example of how to capture packets with `tcpdump`:

```bash
# Capture traffic on the eth0 interface
tcpdump -i eth0

# Capture traffic to or from a specific IP address
tcpdump -i eth0 host 192.168.1.1

# Capture traffic on a specific port
tcpdump -i eth0 port 443

# Write the captured packets to a file
tcpdump -i eth0 -w capture.pcap
```

### Capturing with Wireshark

Wireshark provides a user-friendly graphical interface for capturing packets. You simply select the interface you want to capture from and click "Start." You can also apply capture filters to limit the traffic that is captured.

## How to Analyze Packets

Once you have captured some packets, you can start analyzing them. This is where a tool like Wireshark really shines. Wireshark dissects each packet and displays the information in a human-readable format.

### Things to Look For

- **Source and Destination IP Addresses:** Who is talking to whom?
- **Source and Destination Ports:** What applications are being used?
- **Protocols:** What protocols are being used (e.g., TCP, UDP, HTTP, DNS)?
- **Packet Contents:** In some cases, you can even see the actual data being transmitted (if it's not encrypted).
- **Errors and Retransmissions:** Are there any network problems?

### Filtering Packets

Wireshark has a powerful display filter language that allows you to focus on the packets you are interested in. For example:

- `ip.addr == 192.168.1.1` - Show packets to or from this IP address.
- `tcp.port == 80` - Show traffic on port 80.
- `http.request` - Show only HTTP requests.
- `dns.qry.name == "www.google.com"` - Show DNS queries for `www.google.com`.

## Summary

Packet capture and analysis is an essential skill for any network professional. It provides a low-level view of what's happening on your network and is invaluable for troubleshooting and security analysis.

**Next Topic:** [Scanning & reconnaissance (defensive view)](scanning-reconnaissance)
