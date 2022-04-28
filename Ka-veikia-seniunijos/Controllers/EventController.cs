﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MySqlConnector;
using System;
using System.Data;
using Ka_veikia_seniunijos.ModelsEF;
using System.Linq;
using Newtonsoft.Json;
using Ka_veikia_seniunijos.Interfaces;
using System.Globalization;

namespace Ka_veikia_seniunijos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventController : Controller
    {
        public DatabaseContext _databaseContext;

        private IEventService _eventService;

        public EventController(IEventService eventService, DatabaseContext databaseContext)
        {
            _eventService = eventService;
            _databaseContext = databaseContext;
        }

        [HttpGet("{eldership}")]
        public JsonResult Get(string eldership, [FromQuery] string[] options = null)
        {
            eldership = eldership.ToLowerInvariant();
            var eldership_fk = _databaseContext.Eldership.Where(e => e.Name == eldership).Select(e => e.Id).SingleOrDefault();
            var events = _databaseContext
                                    .Event.Where(e => e.EldershipFk == eldership_fk).ToList();
            if (options.Contains("price"))
            {
                events.OrderBy(e => e.Price);
            }
            if (options.Contains("name"))
            {
                events.OrderBy(e => e.Name);
            }
            if (options.Contains("date"))
            {
                events.OrderBy(e => e.Date);
            }
            return new JsonResult(events);
        }

        [HttpGet("pins")]
        public JsonResult GetPins([FromQuery] bool free = false)
        {
            string result = _eventService.GetAllPinsJson(free);
            JsonResult table = new JsonResult(JsonConvert.DeserializeObject(result));
            return table;
        }

        [HttpPost]
        public int Post(Event ev)
        {
            _databaseContext.Event.Add(ev);
            var update = _databaseContext.SaveChanges();
            if (update < 1)
            {
                return 1062;
            }
            return 200;//good

        }

        [HttpPut]
        public int Put(Event ev)
        {
            _databaseContext.Event.Update(ev);
            var update = _databaseContext.SaveChanges();
            if (update < 1)
            {
                return 1062;
            }
            return 200;
        }

        [HttpDelete("{id}")]
        public int Delete(int id)
        {
            var ev = _databaseContext.Event.FirstOrDefault(p => p.Id == id);
            if (ev == null)
            {
                return 1062;
            }
            _databaseContext.Event.Remove(ev);
            var update = _databaseContext.SaveChanges();
            if (update < 1)
            {
                return 1062;
            }
            return 200;//good
        }
    }
}