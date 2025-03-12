// w01-project/app/routes/contacts.js
// Router for contact routes 

const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact.controller');

/**
 * @swagger
 * tags:
 *   - name: contacts
 *     description: API to manage contacts.
 */

/**
 * @swagger
 * /api/contacts:
 *   post:
 *     summary: Create a new contact.
 *     tags: [contacts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/contact'
 *     responses:
 *       201:
 *         description: contact created successfully.
 *       500:
 *         description: Failed to create contact.
 */
router.post('/contacts', contactController.createContact);

/**
 * @swagger
 * /api/contacts:
 *   get:
 *     summary: Get all contacts.
 *     tags: [contacts]
 *     responses:
 *       200:
 *         description: List of contacts.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/contact'
 *       500:
 *         description: Failed to retrieve contacts.
 */
router.get('/contacts', contactController.getAllContacts);

/**
 * @swagger
 * /api/contacts/{contactId}:
 *   get:
 *     summary: Get a contact by ID.
 *     tags: [contacts]
 *     parameters:
 *       - in: path
 *         name: contactId
 *         required: true
 *         schema:
 *           type: string
 *         description: contact ID.
 *     responses:
 *       200:
 *         description: contact details.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/contact'
 *       404:
 *         description: contact not found.
 *       500:
 *         description: Failed to retrieve contact.
 */
router.get('/contacts/:contactId', contactController.getContactById);

/**
 * @swagger
 * /api/contacts/{contactId}:
 *   patch:
 *     summary: Update a contact by ID.
 *     tags: [contacts]
 *     parameters:
 *       - in: path
 *         name: contactId
 *         required: true
 *         schema:
 *           type: string
 *         description: contact ID.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/contact'
 *     responses:
 *       200:
 *         description: Updated contact details.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/contact'
 *       404:
 *         description: contact not found.
 *       500:
 *         description: Failed to update contact.
 */
router.patch('/contacts/:contactId', contactController.updateContact);

/**
 * @swagger
 * /api/contacts/{contactId}:
 *   delete:
 *     summary: Delete a contact by ID.
 *     tags: [contacts]
 *     parameters:
 *       - in: path
 *         name: contactId
 *         required: true
 *         schema:
 *           type: string
 *         description: contact ID.
 *     responses:
 *       200:
 *         description: contact deleted successfully.
 *       500:
 *         description: Failed to delete contact.
 */
router.delete('/contacts/:contactId', contactController.deleteContact);

module.exports = router;
