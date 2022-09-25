const baseUrl = "http://192.168.15.16:8080/api" // http://ipv4:8080/api

// IPV4 -> IP address of the server.

export default services = {
    trainer: {
        baseTrainer: `${baseUrl}/trainer`,
        loginTrainer: `${baseUrl}/trainer/login`,
    }
}