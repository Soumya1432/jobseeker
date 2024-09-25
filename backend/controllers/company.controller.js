// import { Company } from "../models/company.model.js";

// // Register a new company
// export const registerCompany = async (req, res) => {
//     try {
//         const { companyName } = req.body;
//         if (!companyName) {
//             return res.status(400).json({
//                 message: "Company name is required.",
//                 success: false
//             });
//         }

//         // Check if company already exists
//         let company = await Company.findOne({ name: companyName });
//         if (company) {
//             return res.status(400).json({
//                 message: "Company with this name already exists.",
//                 success: false
//             });
//         }

//         // Create a new company
//         company = await Company.create({
//             name: companyName,
//             userId: req.id
//         });

//         return res.status(201).json({
//             message: "Company registered successfully.",
//             company,
//             success: true
//         });
//     } catch (error) {
//         console.error("Error registering company:", error);
//         return res.status(500).json({
//             message: "An error occurred while registering the company.",
//             success: false
//         });
//     }
// };

// // Get all companies for a user
// export const getCompany = async (req, res) => {
//     try {
//         const userId = req.id; // Logged in user ID
//         const companies = await Company.find({ userId });
//         if (!companies.length) {
//             return res.status(404).json({
//                 message: "No companies found for this user.",
//                 success: false
//             });
//         }

//         return res.status(200).json({
//             companies,
//             success: true
//         });
//     } catch (error) {
//         console.error("Error retrieving companies:", error);
//         return res.status(500).json({
//             message: "An error occurred while retrieving companies.",
//             success: false
//         });
//     }
// };

// // Get a company by ID
// export const getCompanyById = async (req, res) => {
//     try {
//         const companyId = req.params.id;
//         const company = await Company.findById(companyId);
//         if (!company) {
//             return res.status(404).json({
//                 message: "Company not found.",
//                 success: false
//             });
//         }

//         return res.status(200).json({
//             company,
//             success: true
//         });
//     } catch (error) {
//         console.error("Error retrieving company by ID:", error);
//         return res.status(500).json({
//             message: "An error occurred while retrieving the company.",
//             success: false
//         });
//     }
// };

// // Update a company by ID
// export const updateCompany = async (req, res) => {
//     try {
//         const { name, description, website, location } = req.body;

//         // Initialize an empty object for the fields that will be updated
//         const updateData = {};
//         if (name) updateData.name = name;
//         if (description) updateData.description = description;
//         if (website) updateData.website = website;
//         if (location) updateData.location = location;

//         // Update the company
//         const company = await Company.findByIdAndUpdate(req.params.id, updateData, {
//             new: true, // Return the updated document
//             runValidators: true, // Ensure validation rules are applied
//         });

//         if (!company) {
//             return res.status(404).json({
//                 message: "Company not found.",
//                 success: false
//             });
//         }

//         return res.status(200).json({
//             message: "Company information updated successfully.",
//             company,
//             success: true
//         });
//     } catch (error) {
//         console.error("Error updating company:", error);
//         return res.status(500).json({
//             message: "An error occurred while updating the company.",
//             success: false
//         });
//     }
// };


// import { Company } from "../models/company.model.js";

// export const registerCompany = async (req, res) => {
//     try {
//         const { companyName } = req.body;
//         if (!companyName) {
//             return res.status(400).json({
//                 message: "Company name is required.",
//                 success: false
//             });
//         }
//         let company = await Company.findOne({     companyName: companyName });
//         if (company) {
//             return res.status(400).json({
//                 message: "You can't register same company.",
//                 success: false
//             })
//         };
//         company = await Company.create({
//             companyName: companyName,
//             userId: req.id
//         });

//         return res.status(201).json({
//             message: "Company registered successfully.",
//             company,
//             success: true
//         })
        
//     } catch (error) {
//         console.log(error);
//     }
// }
// export const getCompany = async (req, res) => {
//     try {
//         const userId = req.id; // logged in user id
//         const companies = await Company.find({ userId });
//         if (!companies) {
//             return res.status(404).json({
//                 message: "Companies not found.",
//                 success: false
//             })
//         }
//         return res.status(200).json({
//             companies,
//             success:true
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }
// // get company by id
// export const getCompanyById = async (req, res) => {
//     try {
//         const companyId = req.params.id;
//         const company = await Company.findById(companyId);
//         if (!company) {
//             return res.status(404).json({
//                 message: "Company not found.",
//                 success: false
//             })
//         }
//         return res.status(200).json({
//             company,
//             success: true
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }
// export const updateCompany = async (req, res) => {
//     try {
//         const { name, description, website, location } = req.body;
 
     
//         const updateData = { name, description, website, location };

//         const company = await Company.findByIdAndUpdate(req.params.id, updateData, { new: true });

//         if (!company) {
//             return res.status(404).json({
//                 message: "Company not found.",
//                 success: false
//             })
//         }
//         return res.status(200).json({
//             message:"Company information updated.",
//             success:true
//         })

//     } catch (error) {
//         console.log(error);
//     }
// }


import { Company } from "../models/company.model.js";

// Register a new company
export const registerCompany = async (req, res) => {
    try {
        const { companyName } = req.body;

        // Check if companyName is provided
        if (!companyName) {
            return res.status(400).json({
                message: "Company name is required.",
                success: false
            });
        }

        // Check if the company already exists
        const existingCompany = await Company.findOne({ companyName });
        if (existingCompany) {
            return res.status(400).json({
                message: "A company with the same name already exists.",
                success: false
            });
        }

        // Create a new company
        const company = await Company.create({
            companyName,
            userId: req.id
        });

        return res.status(201).json({
            message: "Company registered successfully.",
            company,
            success: true
        });
    } catch (error) {
        console.error("Error registering company:", error);
        return res.status(500).json({
            message: "An error occurred while registering the company.",
            success: false
        });
    }
};

// Get all companies for the logged-in user
export const getCompany = async (req, res) => {
    try {
        const userId = req.id; // logged-in user ID
        const companies = await Company.find({ userId });

        if (companies.length === 0) {
            return res.status(404).json({
                message: "No companies found.",
                success: false
            });
        }

        return res.status(200).json({
            companies,
            success: true
        });
    } catch (error) {
        console.error("Error fetching companies:", error);
        return res.status(500).json({
            message: "An error occurred while fetching companies.",
            success: false
        });
    }
};

// Get a company by ID
export const getCompanyById = async (req, res) => {
    try {
        const companyId = req.params.id;
        const company = await Company.findById(companyId);

        if (!company) {
            return res.status(404).json({
                message: "Company not found.",
                success: false
            });
        }

        return res.status(200).json({
            company,
            success: true
        });
    } catch (error) {
        console.error("Error fetching company by ID:", error);
        return res.status(500).json({
            message: "An error occurred while fetching the company.",
            success: false
        });
    }
};

// Update a company's information
export const updateCompany = async (req, res) => {
    try {
        const { name, description, website, location } = req.body;

        const updateData = { name, description, website, location };
        const company = await Company.findByIdAndUpdate(req.params.id, updateData, { new: true });

        if (!company) {
            return res.status(404).json({
                message: "Company not found.",
                success: false
            });
        }

        return res.status(200).json({
            message: "Company information updated successfully.",
            company,
            success: true
        });
    } catch (error) {
        console.error("Error updating company:", error);
        return res.status(500).json({
            message: "An error occurred while updating the company.",
            success: false
        });
    }
};
