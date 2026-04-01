/**
 * @swagger
 * tags:
 *   name: Travel
 *   description: Travel information endpoints
 */

/**
 * @swagger
 * /travel:
 *   get:
 *     summary: Get travel information for a city
 *     tags: [Travel]
 *     parameters:
 *       - in: query
 *         name: city
 *         required: true
 *         schema:
 *           type: string
 *         description: Name of the city to fetch travel info for
 *     responses:
 *       200:
 *         description: Travel info fetched successfully
 *       400:
 *         description: City name is required
 *       500:
 *         description: Unable to fetch travel info
 */
 
export {}