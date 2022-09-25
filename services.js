const baseUrl = BASE_URL // http://ipv4:8080/api

// IPV4 -> IP address of the server.

export default services = {
    trainer: {
        baseTrainer: `${baseUrl}/trainer`,
        loginTrainer: `${baseUrl}/trainer/login`,
    }
}