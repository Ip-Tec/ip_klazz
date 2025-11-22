---
title: "TCP and UDP Internals"
description: "A deep dive into the two most common transport layer protocols."
---

# TCP and UDP Internals

The Transport Layer is responsible for end-to-end communication between applications. The two most common protocols at this layer are TCP (Transmission Control Protocol) and UDP (User Datagram Protocol).

## TCP: The Reliable Protocol

TCP is a connection-oriented protocol that guarantees reliable, ordered delivery of data. It's used for applications where data integrity is more important than speed, such as web browsing, email, and file transfers.

### Key Features of TCP

- **Connection-Oriented:** TCP establishes a connection using a three-way handshake (`SYN`, `SYN-ACK`, `ACK`) before sending any data. This ensures both devices are ready to communicate.
- **Reliable Delivery:** TCP uses sequence numbers to track data packets. If a packet is lost, it can be retransmitted. It also uses acknowledgments (`ACKs`) to confirm that data has been received.
- **Ordered Delivery:** TCP ensures that data is delivered in the same order it was sent.
- **Flow Control:** TCP uses a sliding window mechanism to manage the amount of data being sent, preventing the receiver from being overwhelmed.
- **Congestion Control:** TCP can detect network congestion and slow down data transfer to avoid overloading the network.

### The TCP Header

The TCP header is 20 bytes long (without options) and contains important information for managing the connection:

- Source Port and Destination Port
- Sequence Number
- Acknowledgment Number
- Flags (e.g., `SYN`, `ACK`, `FIN`, `RST`)
- Window Size
- Checksum

## UDP: The Fast Protocol

UDP is a connectionless protocol that provides a simple, low-overhead way to send data. It's used for applications where speed is more important than reliability, such as live streaming, online gaming, and DNS.

### Key Features of UDP

- **Connectionless:** UDP does not establish a connection before sending data. It simply sends datagrams to the destination.
- **Unreliable Delivery:** UDP does not guarantee that data will be delivered, or that it will be delivered in the correct order. There is no retransmission of lost packets.
- **Low Overhead:** UDP has a very small header (8 bytes), which makes it very efficient.
- **No Flow or Congestion Control:** UDP does not manage the rate of data transfer.

### The UDP Header

The UDP header is only 8 bytes long and contains:

- Source Port and Destination Port
- Length
- Checksum

## TCP vs. UDP: Which to Use?

| Feature              | TCP                                  | UDP                                   |
| -------------------- | ------------------------------------ | ------------------------------------- |
| **Reliability**      | High                                 | Low                                   |
| **Speed**            | Slower                               | Faster                                |
| **Overhead**         | High                                 | Low                                   |
| **Connection Setup** | Required                             | Not required                          |
| **Use Cases**        | Web, Email, File Transfer            | Streaming, Gaming, DNS, VoIP          |

## Summary

TCP and UDP are both essential protocols, but they serve different purposes. TCP provides reliability at the cost of speed, while UDP provides speed at the cost of reliability. Choosing the right protocol is crucial for application performance.

**Next Topic:** [Packet capture & analysis](packet-capture-analysis)
