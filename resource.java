package org.sathish.jsbrain.messenger;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.core.UriBuilder;
import javax.ws.rs.core.UriInfo;

import org.sathish.jsbrain.messenger.model.MessageModel;
import org.sathish.jsbrain.messenger.service.MessageService;

@Path("/imessages")
public class MessageResource {

	MessageService messageservice = new MessageService();
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<MessageModel> getMessages() {
		return messageservice.getAllMessages();
	}
	
	@GET
	@Path("/{messageId}")
	@Produces(MediaType.APPLICATION_JSON)
	public MessageModel getMessage(@PathParam("messageId") Long id) {
		return messageservice.getMessage(id);
	}
	
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response addMessage(MessageModel message, @Context UriInfo uriInfo) throws URISyntaxException {
		MessageModel mesg =  messageservice.addMessage(message);
		String msgID = String.valueOf(mesg.getId());
		URI uri = uriInfo.getAbsolutePathBuilder().path(msgID).build();
		return Response.created(uri)
		.entity(mesg)
		.build();
	}
	
	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/{messageId}")
	public MessageModel updateMessage(MessageModel message, @PathParam("messageId") Long id) {
		message.setId(id);
		return messageservice.updateMessage(message);
	}
	
	@DELETE
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/{messageId}")
	public MessageModel deleteMessage(@PathParam("messageId") Long id) {
		return messageservice.removeMessage(id);
	}
	
	
}
