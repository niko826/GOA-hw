import QRCode from 'qrcode';
import chalk from 'chalk';

const URL = 'https://scontent.ftbs5-3.fna.fbcdn.net/v/t39.30808-1/485869157_1314819523181688_2739789104201425361_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_ohc=IxU4qGgeVKkQ7kNvwGoZcEX&_nc_oc=AdngCH9RV4oJbxh3w3Rh815mH_FC5OVtWSG3lfE47asNF-UTI2JKVpcHMSR86w4wlfA&_nc_zt=24&_nc_ht=scontent.ftbs5-3.fna&_nc_gid=KpT4NiGURhc9eTi6m_hwvQ&oh=00_AfY_78O8t0zZfIe0zvxCj-sLqJW6I0JnZXkzpdeB7JVgag&oe=68BE4426';



QRCode.toFile(
    "profile.png",  
    URL,
    {
        color: {
            dark: "#000000", 
            light: "#FFFFFF" 
        },
        width: 250
    },
    (err) => {
        if (err) return console.error("Error saving QR:", err);

        console.log(chalk.bgGreen("QR Code saved as prodile.png "));
    }
);