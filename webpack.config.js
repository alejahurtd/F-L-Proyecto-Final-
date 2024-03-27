const path = require('path');

module.exports = {
	entry: './src/indexAbuelo.ts',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'assets/images/', // Los archivos se moverán a dist/assets/images/
							// La ruta que se usará en el bundle para referenciar las imágenes
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
};
