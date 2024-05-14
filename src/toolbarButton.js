const { __ } = wp.i18n;
const { BlockControls } = wp.blockEditor;
const { ToolbarButton } = wp.components;

const Controls = (props) => {
	const { attributes } = props;
    const { url } = attributes;

	return (
		<BlockControls group="other">
			<ToolbarButton className="tm-components-toolbar-button"
					icon={() => 
						<svg width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    						<path fill-rule="evenodd" clip-rule="evenodd" d="M16.863 5.443c-1.54-1.469-3.592-2.229-5.688-2.229-2.097 0-4.149.76-5.688 2.229-3.03 2.888-3.03 7.52 0 10.408l5.688 5.422 5.688-5.422c3.03-2.889 3.03-7.52 0-10.408zm-5.688 20.271-7.906-7.537c-4.359-4.155-4.359-10.906 0-15.06C5.448 1.038 8.31 0 11.175 0c2.863 0 5.727 1.039 7.906 3.116 4.358 4.155 4.358 10.906 0 15.061l-7.906 7.537z" fill="#2C4EFF"/>
    						<path d="M11.294 7.692c.745 0 1.386.268 1.922.805s.805 1.178.805 1.923c0 1.133-.358 2.177-1.073 3.13-.686.955-1.594 1.745-2.727 2.37l-.849-.715c.298-.238.566-.566.805-.984.238-.417.402-.82.491-1.207a2.706 2.706 0 0 1-1.52-.94 2.548 2.548 0 0 1-.58-1.654c0-.745.268-1.386.804-1.923.536-.537 1.177-.805 1.922-.805z" fill="#2C4EFF"/>
						</svg>
					}
					label={ __( 'Generate a map')}
					text={ __( 'Generate a map')}
					onClick={ () => {
						
						var form = document.createElement("form");
						
						form.target = "_blank";
						form.method = "POST";
						form.action = url;
			
						if (window.getSelection().toString() != '' ) {
							var input = document.createElement("input");
							  	
							input.type = "hidden";
							input.name = "token";
						
							input.value = "89e53f2d169fd1f8fdee4b2cb3ef74f4";
							form.appendChild(input);
							
							var input = document.createElement("input");
							  	
							input.type = "hidden";
							input.name = "mapText";
						
							input.value = JSON.stringify(window.getSelection().toString());
							form.appendChild(input);
						}
						 
						document.body.appendChild(form);
						form.submit();
						document.body.removeChild(form);

						var name = 'textomap/embed-map';
						var insertedBlock = wp.blocks.createBlock(name);
						
						wp.data.dispatch( 'core/block-editor').insertBlocks(insertedBlock);
					}}
			>	
			</ToolbarButton>
		</BlockControls>
	);
};

export default Controls;