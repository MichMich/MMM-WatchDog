# MMM-WatchDog

This MagicMirror² module keeps an eye on your UI and quits app in case the UI crashes.
If you combine this with the [PM2 process manager](https://github.com/MichMich/MagicMirror/wiki/Auto-Starting-MagicMirror#using-pm2), MM2 will automaticly restart after a UI failure.

## Installation

In your terminal, go to your MagicMirror's Module folder:
````
cd ~/MagicMirror/modules
````

Clone this repository:
````
git clone https://github.com/MichMich/MMM-WatchDog.git
````

Configure the module in your `config.js` file.

## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
	{
		module: 'MMM-WatchDog',
		config: {
			// See 'Configuration options' for more information.
		}
	}
]
````

## Configuration options

The following properties can be configured:


<table width="100%">
	<thead>
		<tr>
			<th>Option</th>
			<th width="100%">Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>interval</code></td>
			<td>The number of seconds between each Heartbeat.
				<br><b>Default value:</b> <code>2</code>
			</td>
		</tr>
        	<tr>
			<td><code>timeout</code></td>
			<td>The timeout in seconds before the MagicMirror² app restarts.
				<br><b>Default value:</b> <code>10</code>
			</td>
		</tr>
        </tr>
        	<tr>
			<td><code>pm2_app</code></td>
			<td>The name of the pm2 app to restart on failure.
				<br><b>Default value:</b> <code>MagicMirror</code>
			</td>
		</tr>
	</tbody>
</table>
